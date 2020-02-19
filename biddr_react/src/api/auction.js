import { baseUrl } from "../config";

export const Auction = {
    // Fetch all auctions from server
    all() {
      return fetch(`${baseUrl}/auctions`, {
        credentials: "include"
      }).then(res => res.json());
    },
    // Fetch a single quesion
    one(id) {
      return fetch(`${baseUrl}/auctions/${id}`, {
        credentials: "include"
      }).then(res => res.json());
    },
    // Create a auction
    create(params) {
      // params is an object that reperesents a auction
      // {body: 'qBody', title: 'qTitle' }
      return fetch(`${baseUrl}/auctions`, {
        credentials: "include",
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(params)
      }).then(res => res.json());
    },
    // Edit a auction
    update(id, params) {
      return fetch(`${baseUrl}/auctions/${id}`, {
        method: "PATCH",
        credentials: "include",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(params)
      }).then(res => res.json());
    },
    // Delete a auction
    destroy(id) {
      return fetch(`${baseUrl}/auctions/${id}`, {
        credentials: "include",
        method: "DELETE"
      }).then(res => res.json());
    }
  };
  