"use client";
import {
  Button,
  Container,
  Divider,
  Group,
  Image,
  Text,
  TextInput
} from "@mantine/core";
import { IconMenu2 } from "@tabler/icons-react";
export default function NavBar() {
  // const [opened, { toggle }] = useDisclosure(false);
  return (
    <Container py={"lg"}>
      <div className={""}>
        <Group visibleFrom="sm" justify="space-between">
          <Group>
            <Image src={"/assets/logo-new.svg"} h={"auto"} w="128" alt="logo" />
            <Button
              leftSection={<IconMenu2 size={18} />}
              variant="transparent"
              color="#00d094"
              p={0}
            >
              <Text size="14px">카테고리</Text>
            </Button>
          </Group>

          <TextInput
            w={330}
            leftSection={<Image src={"/assets/search_new.svg"} alt="search" />}
            placeholder="살까말까 고민된다면 검색해보세요!"
          />

          <Group>
            <Image src={"/assets/home-event.svg"} alt="event" />
            <Divider orientation="vertical" my={5} />
            <Button variant="transparent" color="#333333" p={0}>
              <Text size="14px">로그인 / 회원가입</Text>
            </Button>
          </Group>
        </Group>
        <Group gap={0} hiddenFrom="sm" justify="space-between">
          <Image src={"/assets/logo-new.svg"} h={"auto"} w="128" alt="logo" />

          <Group>
            <Image src={"/assets/bell_default.svg"} alt="bell" />
            <Image src={"/assets/search_new.svg"} alt="search" />
          </Group>
        </Group>
        {/* <Burger opened={opened} onClick={toggle} size="sm" hiddenFrom="sm" /> */}
      </div>
    </Container>
  );
}
