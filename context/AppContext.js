"use client";
import React, { useState, useEffect, createContext } from "react";


export const AppContext = createContext();

const AppProvider = ({ children }) => {


  const [products, setProducts] = useState([]);
  const [users, setUsers] = useState([]);
  const [category, setCategory] = useState("");

  const [formNumber, setFormNumber] = useState(1);
  // product form data
  const [productName, setProductName] = useState("");
  const [condition, setCondition] = useState("New");
  const [brand, setBrand] = useState("");
  const [location, setLocation] = useState("");
  const [productDescription, setProductDescription] = useState("");
  const [tags, setTags] = useState([])
  const [productImages, setProductImages] = useState([]);

  // specs form data
  const [specs, setSpecs] = useState([]);
  const [price, setPrice] = useState(0);
  const [soldDate, setSoldDate] = useState("");


  // picture form data
  const [links, setLinks] = useState([]);

  const [userId, setUserId] = useState(localStorage.getItem("userId") || "663b4e2b86a15e597982e1b1");

  // getDashDetails, itemsSold, itemsBought

  const [itemsBought, setItemsBought] = useState([]);
  const [itemsSold, setItemsSold] = useState([]);


  const [maxValue, setMaxValue] = useState([]);
  const [maxBid, setMaxBid] = useState([]);
  const [maxRating, setMaxRating] = useState([]);

  const getDashDetails = (userId) => {

    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
      "id": userId || "663b4e2b86a15e597982e1b1"
    });

    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow'
    };

    fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/users/dashboard`, requestOptions)
      .then(response => response.json())
      .then(result => {
        if (result.success) {
          setItemsBought(result.itemsBought);
          setItemsSold(result.itemsSold);
        }
      })
      .catch(error => console.log('error', error));


    // fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/dashboard/getDashDetails`)
    //   .then(res => res.json())
    //   .then(res => {
    //     if (res.success) {
    //       setItemsBought(res.message.itemsBought);
    //       setItemsSold(res.message.itemsSold);
    //     }
    //   });
  }

  const getAdminDetails = (userId) => {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
      "id": userId || "663b4e2b86a15e597982e1b1"
    });

    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow'
    };

    fetch("http://localhost:5000/api/users/admin", requestOptions)
      .then(response => response.json())
      .then(result => {
        if (result.success) {
          setMaxValue(result.maxValue);
          setMaxBid(result.maxBids);
          setMaxRating(result.maxRatings);
        }
      })
      .catch(error => console.log('error', error));
  }

  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/product/get`)
      .then(res => res.json())
      .then(res => {
        if (res.success) setProducts(res.message);
      });
  }, []);

  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/users/get`)
      .then(res => res.json())
      .then(res => {
        if (res.success) setUsers(res.message);
      });
  }, []);


  return (
    <AppContext.Provider
      value={{
        products,
        setProducts,
        users,
        setUsers,
        category,
        setCategory,
        productName,
        setProductName,
        condition,
        setCondition,
        brand,
        setBrand,
        location,
        setLocation,
        productDescription,
        setProductDescription,
        tags,
        setTags,
        productImages,
        setProductImages,
        formNumber,
        setFormNumber,
        links,
        setLinks,
        specs,
        setSpecs,
        price,
        setPrice,
        soldDate,
        setSoldDate,
        userId,
        setUserId,
        getDashDetails,
        itemsBought,
        itemsSold,
        setItemsBought,
        setItemsSold,

        getAdminDetails,
        maxValue,
        maxBid,
        maxRating,
        setMaxBid,
        setMaxRating,
        setMaxValue,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;
