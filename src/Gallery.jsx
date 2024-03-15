import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import axios from "axios";

const url =
  "https://api.unsplash.com/search/photos?client_id=dlHxVmzesbs6JbD4Zf3jqG_s8Nf6msKz8DJaqYkxOhw&query=office";
const Gallery = () => {
  const response = useQuery({
    queryKey: ["images"],
    queryFn: async () => {
      const result = await axios(url);
      return result.data;
    },
  });
  console.log(response);
  if (response.isLoading)
    return (
      <section className="image-container">
        <h4>Loading...</h4>
      </section>
    );
  if (response.isError)
    return (
      <section className="image-container">
        <h4>There was an error...</h4>
      </section>
    );
  const result = response.data.results;
  if (result.length < 1)
    return (
      <section className="image-container">
        <h4>No result found...</h4>
      </section>
    );
  return (
    <section className="image-container">
      {result.map((item) => {
        const url = item?.urls?.regular;
        return (
          <img
            src={url}
            key={item.id}
            alt={item.alt_description}
            className="img"
          />
        );
      })}
    </section>
  );
};

export default Gallery;
