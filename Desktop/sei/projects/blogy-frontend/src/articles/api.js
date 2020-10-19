import apiUrl from "../apiConfig";
import axios from "axios";
import apiURL from "../apiConfig";

// INDEX, SHOW, CREATE, UPDATE, DESTROY

// Get All Articles
const getAllArticles = () => {
  return axios.get(`${apiUrl}/articles`);
};

//Delete Article By ID
const deleteArticleById = (id) => {
   return axios.delete(`${apiURL}/articles/${id}`);
}
//Add article 
const PostArticles = newarticle => {
  return axios.post(`${apiURL}/articles`, newarticle);
};

//Update article By ID
const UpdateArticleById = (id, updatedart) => {
  return axios.patch(`${apiURL}/articles/${id}`, updatedart);
};

export { getAllArticles, deleteArticleById, PostArticles, UpdateArticleById };
