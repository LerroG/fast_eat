import type { NextApiRequest, NextApiResponse } from "next";
import { products } from './data/products';

export default function handler(req:NextApiRequest, res:NextApiResponse) {
  const { category } = req.query;
  if (req.method === 'GET') {
    res.status(200).json(products.filter(product => product.category === category))
  };
}