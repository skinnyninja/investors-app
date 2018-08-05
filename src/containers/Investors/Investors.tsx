/* tslint:disable-next-line */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { isWhitelist, retrieveProducts, handleActiveProduct } from './action';
import { IProducts, IWhitelist } from './interface';

import Header from '../../components/Header/Header';
import ProductDetails from '../../components/ProductDetails/ProductDetails';
import HelpInfo from '../../components/HelpInfo/HelpInfo';
import MainTitle from '../../components/MainTitle/MainTitle';
import FilterTabs from '../../components/FilterTabs/FilterTabs';
import Loader from '../../components/Loader/Loader';
import Footer from '../../components/Footer/Footer';


import './Investors.scss';

// tslint:disable-next-line:interface-name
interface AppProps {
  investors?: {
    loading: boolean;
    whitelist: IWhitelist;
    activeProduct: IProducts;
    products: [IProducts];
    error: any;
  };
  isWhitelist: any;
  retrieveProducts: any;
  handleActiveProduct: any;
}

class MainApp extends Component <AppProps, {}>{
  componentDidMount() {
    // this.props.isWhitelist();
    this.props.retrieveProducts();
  }

  render() {
    const { handleActiveProduct, investors } = this.props;
    const { loading, activeProduct, products, error } = investors;

    return (
      <div className="app">
        <Header />
        <div className="app__body">

          { loading && !activeProduct && <Loader /> }

          { error && <MainTitle title="Something went wrong here. Please try again later" /> }

          { !loading && activeProduct &&
            <>
              <MainTitle title={`Your ${activeProduct.product_name} Investments`} />
              <FilterTabs
                filters={products}
                filterActive={activeProduct}
                filterToggle={handleActiveProduct} />

              <div className="charts">
                <div className="container">
                  <div className="charts__body">
                    {
                      products.map((product: IProducts, index) => {
                        if (product.lending_pk === activeProduct.lending_pk) 
                          return <ProductDetails key={index} product={product} />;
                      })
                    }
                  </div>
                </div>
              </div>
            </>
          }
        </div>

        <HelpInfo />
        <Footer />
      </div>
    );
  }
}

const mapStateToProps = (state: any) => {
  return {
    investors: state.investors,
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return bindActionCreators({
    handleActiveProduct: handleActiveProduct,
    retrieveProducts: retrieveProducts,
    isWhitelist: isWhitelist,
  // tslint:disable-next-line:align
  }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(MainApp);
