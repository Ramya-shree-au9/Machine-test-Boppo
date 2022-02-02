import React, { useEffect,useState} from "react";
import { connect } from "react-redux";
import { ProductList,UpdatedProductList,AddToCart} from "../Actions/homeActions";
import ProductDisplay from "../Components/Home/ProductDisplay";
import Loader from "../Components/Loader";
import Banner from '../Components/Home/Banner'
import Header from './Header'

const Home=(props)=> {
  const { HomeStoreInfo } = props;
  
  useEffect(() => {
    
  if (HomeStoreInfo.ProductApi.length <= 0) {
      return props.dispatch(ProductList());
      }
    
    // eslint-disable-next-line
  }, []);

  const updateData=(data) => {
    if(data.length>0){
      const newArr = data.map(v => ({...v, quantity: 1}))
      props.dispatch(UpdatedProductList(newArr))
      }
  }

  const quantityUpdate=(qty,id) => {
    if(HomeStoreInfo.ProductApi.length>0){
      const newArr = HomeStoreInfo.ProductApi.map(v => ({...v, quantity:id === v.id?qty:v.quantity}))
      props.dispatch(UpdatedProductList(newArr))
      }

    if(HomeStoreInfo.CartProduct.length>0){
      const newArr = HomeStoreInfo.CartProduct.map(v => ({...v, quantity:id === v.id?qty:v.quantity}))
      props.dispatch(AddToCart(newArr))
      }
  }

  if (HomeStoreInfo.ProductApi &&
    HomeStoreInfo.ProductApi.length > 0) {
      return (
        <React.Fragment>
       < Header/>

          <Banner/>
          <ProductDisplay productInfo={HomeStoreInfo.ProductApi} 
          updateData={updateData}
           quantityUpdate={quantityUpdate}
          />          
        </React.Fragment>
      );
    
      
    } else {
      return (
        <Loader/>
      );
    }
  
};

function mapStateToProps(state) {
  return {
    HomeStoreInfo: state.HomeReducer
  };
}

export default connect(mapStateToProps)(Home);
