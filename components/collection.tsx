"use client";
import {
  Container
} from "@mantine/core";
import { useEffect, useState } from "react";
import { useHomeService } from "../services/services";
import { CollectionData } from "../services/types";
import CollectionSection from "./collection_section";

export default function Collection() {
  const [data, setData] = useState<CollectionData[]>([]);
  const [_isLoading, setLoading] = useState(false);

  const { getCollections } = useHomeService();

  const fetchData = () => {
    getCollections()
      .then(function (response) {
        const responseData = response.data;

        setData(responseData.items);
        setLoading(false);
      })
      .catch(function (_error) {
        setLoading(false);
      });
  };
  useEffect(() => {
    fetchData();
  }, []);

  const typeSingle = data.filter((element) => {
    return element.type === "SINGLE";
  });
  const singleRows = typeSingle?.map((row, index) => (
    <CollectionSection data={row} key={index} />
  ));
  return <Container py={"lg"}>{singleRows}</Container>;
}
