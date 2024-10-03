import axios from "axios";

export default axios.create({
    baseURL: "https://api.yelp.com/v3/businesses",
    headers:{
        Authorization: "Bearer a3h4JLwYlgt9vcKpeAeR-UrYkAmMZyYSpyHan-xy8UMocvzRAQGu_LeevTREL11Vg8Znup2gmrrtb3YE0MKnRB5lHxRuXqkJMM58KMsTEcEb4CQeX91zPtJQ40zqZnYx "
    }

});
