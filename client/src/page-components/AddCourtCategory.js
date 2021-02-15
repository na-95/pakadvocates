import React, { Component } from 'react';
import { Container, Button } from 'react-bootstrap';
import CourtCategoryModal from '../components/CourtCategoryModal';
import { connect } from "react-redux";
import { postCourtCategory, getCourtCategories, deleteCourtCategory } from '../actions';
import { FaTimesCircle } from "react-icons/fa";

let courtCategories;

const mapStateToProps = state => {
    courtCategories = state.CourtCategoryReducer.courtCategories;

    return state;
}

class AddCourtCategory extends Component {

    state = {
        isModalOpen: false,
        courtCategory: ''
    }

    componentDidMount = () => {
        this.props.getCourtCategories();
    }

    toggleModal = () => {
        this.setState({
            isModalOpen: !this.state.isModalOpen
        }, () => {
            console.log(this.state.isModalOpen)
        })
    }

    handleForm = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        }, () => {
            console.log(this.state)
        })
    }

    submitForm = async (e) => {
        e.preventDefault()

        let courtCategory = {
            court_category: this.state.courtCategory,
        }

        await this.props.postCourtCategory(courtCategory, '/thankyou');                 // action that makes the API post call

        this.toggleModal();                                                             //close the form modal

        this.props.getCourtCategories();                                                //get latest court categories from db
    }

    deleteCourtCategory = (courtCategoryId) => async (e) => {
        if (window.confirm('Are you sure you want to remove this court category?')) {

            await this.props.deleteCourtCategory(courtCategoryId);

            this.props.getCourtCategories();                                                //get latest court categories from db

        }
    }

    render() {
        return (
            <Container className="py-4 ">
                <div className="card bg-light">
                    <article className="card-body mx-auto" style={{ maxWidth: "600px" }}>
                        <h4 className="card-title mt-3 text-center">Court Categories</h4>
                        {/* <p className="text-center">Get started with your free <b>PakAdvocates</b> account</p> */}
                        <hr />
                        <ul className="unstyled list-group" >
                            {
                                courtCategories.map(category => (
                                    <li className='list-group-item my-2 d-flex justify-content-between'>
                                        <span >{category.court_category}</span>
                                        <FaTimesCircle className='times-icon' onClick={this.deleteCourtCategory(category.id)} />
                                    </li>
                                ))
                            }
                        </ul>
                        <hr />
                        <div className="d-flex justify-content-center">
                            <Button onClick={this.toggleModal}>Add New Category</Button>
                            {
                                this.state.isModalOpen && <CourtCategoryModal show={this.state.isModalOpen} onHide={this.toggleModal} handleForm={this.handleForm} submitForm={this.submitForm} />
                            }
                        </div>
                    </article>
                </div>
            </Container>
        )
    }
}

export default connect(mapStateToProps, { postCourtCategory, getCourtCategories, deleteCourtCategory })(AddCourtCategory)