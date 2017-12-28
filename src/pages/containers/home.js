import React, { Component } from 'react';
import HomeLayout from '@/pages/components/home-layout';
import Categories from '@/categories/components/categories';
import ModalContainer from '@/widgets/containers/modal';
import Modal from '@/widgets/components/modal';
import HandleError from '@/error/containers/handleError';
import Related from '@/pages/components/related'
import VideoPlayer from '@/player/containers/video-player'

class Home extends Component {
  state = {
    modalVisible: false,
    media: null
  }

  handleOpenModal = (media) => {
    this.setState({
      modalVisible: true,
      media
    })
  }

  handleCloseModal = (event) => {
    this.setState({
      modalVisible: false
    })
  }
  render() {
    return (
      <HandleError>
        <HomeLayout >
          <Related />
          
          <Categories 
            categories={this.props.data.categories} 
            handleOpenModal={this.handleOpenModal}
          />
          {
            this.state.modalVisible && <ModalContainer>
            <Modal handleClick={this.handleCloseModal} >
              <VideoPlayer
                autoPlay={true}
                src={this.state.media.src}
                title={this.state.media.title}
              />
            </Modal>
          </ModalContainer> 
          }
          
        </HomeLayout>
      </HandleError>
    );
  }
}

export default Home;