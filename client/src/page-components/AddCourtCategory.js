import React, { Component } from 'react'
import { Container, Button } from 'react-bootstrap'
import CourtCategoryModal from '../components/CourtCategoryModal'

export default class AddCourtCategory extends Component {

    state = {
        isModalOpen: false
    }

    toggleModal = () => {
        this.setState({
            isModalOpen: !this.state.isModalOpen
        }, ()=> {
            console.log(this.state.isModalOpen)
        })
    }

    render() {
        return (
            <Container className="py-4 ">
                <div className="card bg-light">
                    <article className="card-body mx-auto" style={{maxWidth: "600px"}}>
                        <h4 className="card-title mt-3 text-center">Approve/Reject Pending Lawyer Requests</h4>
                        {/* <p className="text-center">Get started with your free <b>PakAdvocates</b> account</p> */}
                        <hr/>
                        <ul className="requests-list p-0" >

                        </ul>
                        <div className="d-flex justify-content-center">
                            <Button onClick={this.toggleModal}>Add New Category</Button>
                            {
                                this.state.isModalOpen && <CourtCategoryModal show={this.state.isModalOpen} onHide={this.toggleModal}/>
                            }
                        </div>
                    </article>
                </div>
            </Container> 
        )
    }
}


// {
//     unapprovedLawyers.length > 0 &&
//     unapprovedLawyers.map(item => (
//         <li key={item.id.toString()} className='unstyled my-4 list-group'>
//             <span className="list-group-item">{`${item.first_name} ${item.last_name}`}</span>
//             <span className="list-group-item">{`${item.email}`}</span>                                       
//             <span role="button" className="text-center font-weight-bold text-dark list-group-item list-group-item-success">Approve</span>                                       
//             <span role="button" className="text-center font-weight-bold text-dark list-group-item list-group-item-danger" onClick={this.deleteLawyerRequest(item.id.toString())}>Reject</span>                                       
//             {/* <ButtonGroup className='mt-1'>
//                 <Button className="btn-success ">Approve</Button>
//                 <Button className="btn-danger " onClick={this.deleteLawyerRequest(item.id.toString())}>Reject</Button>
//             </ButtonGroup> */}
//         </li>
//     ))
// }
// {
//     unapprovedLawyers.length === 0 && 
//     <li className='unstyled my-4 list-group'>
//         <span className="text-center list-group-item">No Pending Requests.</span>
//     </li> 
// }