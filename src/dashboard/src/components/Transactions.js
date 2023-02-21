import React from "react";

export const Transactions = () => {
    
    return (
    <>
<table class="table table-hover table-bordered border-dark">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Expense</th>
      <th scope="col">Category</th>
      <th scope="col">Amount</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Jacket</td>
      <td>Clothing</td>
      <td>200</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Spotify</td>
      <td>Subscription</td>
      <td>10</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td>Jacket</td>
      <td>Clothing</td>
      <td>200</td>
    </tr>
  </tbody>
</table>
    </>
    )
}