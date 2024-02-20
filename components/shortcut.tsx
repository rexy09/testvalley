"use client";
import { Container, Image, SimpleGrid, Stack, Text } from "@mantine/core";
import { useEffect, useState } from "react";
import { useHomeService } from "../services/services";
import { ShortutData } from "../services/types";

export default function Shortcut() {
  const [data, setData] = useState<ShortutData[]>([]);
  const [_isLoading, setLoading] = useState(false);

  const { getShortcut } = useHomeService();

  const fetchData = () => {
    getShortcut()
      .then(function (response) {
        const responseData = response.data;

        setData(responseData);
        setLoading(false);
      })
      .catch(function (_error) {
        setLoading(false);
      });
  };
  useEffect(() => {
    fetchData();
  }, []);

  const rows = data.map((row, index) => (
    <Stack key={index}>
      <Image src={row.imageUrl} h={"auto"} w="62" alt={row.title} />
      <Text size="12px">{row.title}</Text>
    </Stack>
  ));
  return (
    <Container py={"lg"}>
      <SimpleGrid
        cols={{ base: 5, sm: 5, lg: 10 }}
        spacing={{ base: 10, sm: "xl" }}
        verticalSpacing={{ base: "md", sm: "xl" }}
      >
        {rows}
      </SimpleGrid>
    </Container>
  );
}
