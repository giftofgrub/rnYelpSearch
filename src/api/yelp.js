import axios from "axios";

export default axios.create({
  baseURL: "https://api.yelp.com/v3/businesses",
  headers: {
    Authorization:
      "Bearer rLZMaDdqLcgy9SPPci5n6TvUQcf1o44MSTxttuG81nXIh6FSxPE-7KLv5LQtvfIJPMFZDpuzjmiP_SqRmlxfITXHVz4a2LjAuIbAxUHADmunaffQxSHCBNstruM-X3Yx",
  },
});
