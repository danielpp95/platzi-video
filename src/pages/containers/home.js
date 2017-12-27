import React, { Component } from 'react';
import HomeLayout from '@/pages/components/home-layout';
import Categories from '@/categories/components/categories';
import ModalContainer from '@/widgets/containers/modal';

class Home extends Component {
  render() {
    return (
      <div>
        <HomeLayout >
          <Categories categories={this.props.data.categories} />
          <ModalContainer>
            <h1>esto es un portal</h1>
          </ModalContainer>
        </HomeLayout>
      </div>
    );
  }
}

export default Home;