const URL = `https://637b69a76f4024eac20ce2d3.mockapi.io/api/`;



class productService{

    callApi(url, method, data){
        return axios({
            url:`${URL}/${url}`,
            method,
            data,
        });
    }
    getListProductApi(){
        return axios({
            url: `https://637b69a76f4024eac20ce2d3.mockapi.io/api/products`,
            method: "GET",
        });
    }
    updateProductApi(product){
        return axios({
            url: `https://637b69a76f4024eac20ce2d3.mockapi.io/api/products/${product.id}`,
            method: "PUT",
            data: product,
        });
    }
}

export default productService;