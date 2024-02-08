import type { NextApiRequest, NextApiResponse } from "next";
import { products } from './data/products';

export default function handler(req:NextApiRequest, res:NextApiResponse) {
  console.log(req);
  if (req.method === 'GET') {
    res.status(200).json(products);
  };
}