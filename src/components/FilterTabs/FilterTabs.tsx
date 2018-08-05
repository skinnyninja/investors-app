import React, { PureComponent } from 'react';
import { FilterTabsContainer, FilterTabsHolder } from './FilterTabs.styles';
import { IProducts } from '../../containers/Investors/interface';

import './FilterTabs.scss';

// tslint:disable-next-line:interface-name
interface FilterTabsProps {
  filters: [IProducts];
  filterActive: IProducts;
  filterToggle: Function;
}

export default class FilterTabs extends PureComponent <FilterTabsProps, any> {
  constructor(props: FilterTabsProps) {
    super(props);
  }

  render() {
    const { filters, filterActive, filterToggle } = this.props;

    return (
      <FilterTabsContainer className="filter-tabs">
        <div className="container">
          <FilterTabsHolder className="row no-gutters">
            {
              filters.map((filter: IProducts, index: number) => {
                const filterClass = filter.lending_pk === filterActive.lending_pk ? 'filter-tabs__button--active' : '';
                return  (
                  <button
                    onClick={() => filterToggle(filter)}
                    key={index}
                    className={`filter-tabs__button ${filterClass}`} >
                    {filter.product_name} Performance
                  </button>
                );
              })
            }
          </FilterTabsHolder>
        </div>
      </FilterTabsContainer>
    );
  }
}
