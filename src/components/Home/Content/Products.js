import React from 'react';
import RestData from '../../../assets/tester.json';

const Products = () => {
    return (
        <div className="prd__ms__container">
            <div className="prd__container">
                {RestData.map((item, id) => {
                    return (
                        <div className="prd__singleitem__container" key={id}>
                            <img src={item.thumbnail} alt="" />

                            <div className="prd__item__content">
                                <div className="prd__categories">
                                    <p className="categories_type">
                                        {item.categories}
                                    </p>
                                </div>

                                <h2>{item.title}</h2>
                                <p className="prd__item__desc">{item.desc}</p>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default Products;
