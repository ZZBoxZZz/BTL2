function ProductService() {
  this.getListProductApi = function () {
    /**
     * Promise
     *  - Pending (thời gian chờ)
     *  - Resolve (thành công)
     *  - Reject (thất bại)
     */
    //pending
    var promise = axios({
      url: "https://5a6451dcf2bae00012ca1a6a.mockapi.io/api/products",
      method: "GET",
    });

    return promise;
  };
}
