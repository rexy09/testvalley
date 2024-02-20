"use client";
import { Carousel } from "@mantine/carousel";
import {
  BackgroundImage,
  Button,
  Container,
  Grid,
  Group,
  Image,
  SimpleGrid,
  Space,
  Stack,
  Text,
} from "@mantine/core";
import Autoplay from "embla-carousel-autoplay";
import { useRef } from "react";
import { CollectionData } from "../services/types";
import { useMediaQuery } from "@mantine/hooks";
interface Props {
  data: CollectionData | undefined;
}

export default function CollectionSection({ data }: Props) {
  const autoplay = useRef(Autoplay({ delay: 2000 }));
  const matches = useMediaQuery("(min-width: 62em)");

  const rows = data?.items.map((row, index) =>
    matches ? (
      <Carousel.Slide key={index}>
        <BackgroundImage src={row.publication.media[0].uri} radius="sm">
          <Stack h={174} align="flex-start" justify="flex-end" gap="xs">
            <Button variant="filled" size="xs" py={0} px={5} m={3}>
              <Image src={"/assets/return-new.svg"} alt="return-new" />
              <Space w={2} />
              <Text size="11px">리턴 가능</Text>
            </Button>
          </Stack>
        </BackgroundImage>
        <Space h={5} />

        <Text size="12px">{row.publication.title}</Text>
        <Space h={5} />
        {row.publication.priceInfo.hasOwnProperty("couponDiscountPrice") ? (
          <Group gap="0">
            <Text fw={600} c="red">
              {row.publication.priceInfo.couponDiscountRate}%
            </Text>
            <Text fw={600}>
              {row.publication.priceInfo.couponDiscountPrice}
            </Text>
            <Text fw={200} size="10px">
              원
            </Text>
          </Group>
        ) : row.publication.priceInfo.hasOwnProperty("discountPrice") ? (
          <Group gap="0">
            <Text fw={600} c="red">
              {row.publication.priceInfo.discountRate}%
            </Text>
            <Text fw={600}>{row.publication.priceInfo.discountPrice}</Text>
            <Text fw={200} size="10px">
              원
            </Text>
          </Group>
        ) : (
          <Group gap="0">
            <Text fw={600}>{row.publication.priceInfo.price}</Text>
            <Text fw={200} size="10px">
              원
            </Text>
          </Group>
        )}

        <Space h={5} />

        <Text fw={200} size="10px">
          {row.publication.tagsOnDesc.length > 0
            ? row.publication.tagsOnDesc[0]
            : ""}
        </Text>
        <Space h={5} />

        <Group gap="2">
          <Image src={"/assets/star-darkgray.svg"} alt={"star-darkgray"} />
          <Text size={"10px"}>{row.publication.rating}</Text>
        </Group>
      </Carousel.Slide>
    ) : (
      <div key={index}>
        <BackgroundImage src={row.publication.media[0].uri} radius="sm">
          <Stack h={174} align="flex-start" justify="flex-end" gap="xs">
            <Button variant="filled" size="xs" py={0} px={5} m={3}>
              <Image src={"/assets/return-new.svg"} alt="return-new" />
              <Space w={2} />
              <Text size="11px">리턴 가능</Text>
            </Button>
          </Stack>
        </BackgroundImage>
        <Space h={5} />

        <Text size="12px">{row.publication.title}</Text>
        <Space h={5} />
        {row.publication.priceInfo.hasOwnProperty("couponDiscountPrice") ? (
          <Group gap="0">
            <Text fw={600} c="red">
              {row.publication.priceInfo.couponDiscountRate}%
            </Text>
            <Text fw={600}>
              {row.publication.priceInfo.couponDiscountPrice}
            </Text>
            <Text fw={200} size="10px">
              원
            </Text>
          </Group>
        ) : row.publication.priceInfo.hasOwnProperty("discountPrice") ? (
          <Group gap="0">
            <Text fw={600} c="red">
              {row.publication.priceInfo.discountRate}%
            </Text>
            <Text fw={600}>{row.publication.priceInfo.discountPrice}</Text>
            <Text fw={200} size="10px">
              원
            </Text>
          </Group>
        ) : (
          <Group gap="0">
            <Text fw={600}>{row.publication.priceInfo.price}</Text>
            <Text fw={200} size="10px">
              원
            </Text>
          </Group>
        )}

        <Space h={5} />

        <Text fw={200} size="10px">
          {row.publication.tagsOnDesc.length > 0
            ? row.publication.tagsOnDesc[0]
            : ""}
        </Text>
        <Space h={5} />

        <Group gap="2">
          <Image src={"/assets/star-darkgray.svg"} alt={"star-darkgray"} />
          <Text size={"10px"}>{row.publication.rating}</Text>
        </Group>
      </div>
    )
  );
  return (
    <Container py={"lg"}>
      <Grid>
        <Grid.Col span={{ base: 12, md: 12, lg: 3 }}>
          <Text size="22px" fw={600} c="#333333">
            {data?.title}
          </Text>
          <Text size="11px" fw={500} c="#999999" mt={"sm"}>
            {data?.subtitle}
          </Text>
        </Grid.Col>
        <Grid.Col span={{ base: 12, md: 12, lg: 9 }}>
          {matches ? (
            <Carousel
              slideSize={{ base: "100%", sm: "50%", md: "25%" }}
              slideGap={{ base: 0, sm: "md" }}
              loop
              align="start"
              plugins={[autoplay.current]}
              onMouseEnter={autoplay.current.stop}
              onMouseLeave={autoplay.current.reset}
            >
              {rows}
            </Carousel>
          ) : (
            <SimpleGrid
              cols={{ base: 2, sm: 2, lg: 2 }}
              spacing={{ base: 10, sm: "xl" }}
              verticalSpacing={{ base: "md", sm: "xl" }}
            >
              {rows}
            </SimpleGrid>
          )}
        </Grid.Col>
      </Grid>
    </Container>
  );
}
