import React, { Component } from 'react';
import HomeLayout from '@/pages/components/home-layout';
import Categories from '@/categories/components/categories';
import ModalContainer from '@/widgets/containers/modal';
import Modal from '@/widgets/components/modal';

class Home extends Component {
  state = {
    modalVisible: false
  }

  handleOpenModal = () => {
    this.setState({
      modalVisible: true
    })
  }

  handleCloseModal = (event) => {
    this.setState({
      modalVisible: false
    })
  }
  render() {
    return (
      <div>
        <HomeLayout >
          <Categories 
            categories={this.props.data.categories} 
            handleOpenModal={this.handleOpenModal}
          />
          {
            this.state.modalVisible && <ModalContainer>
            <Modal handleClick={this.handleCloseModal} >
              <h1>esto es un modal</h1>

            </Modal>
          </ModalContainer> 
          }
          
        </HomeLayout>
      </div>
    );
  }
}

export default Home;