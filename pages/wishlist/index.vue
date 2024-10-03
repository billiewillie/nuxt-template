<script setup lang="ts">
import type { ProductCard } from '~/types';

const wishList = useCookie('wishList');
const wishListExpandableMaterials = useCookie('wishListExpendableMaterials');

const wishListData = ref<ProductCard[] | null>(null);
const wishListExpandableMaterialsData = ref<ProductCard[] | null>(null);

async function getWishList() {
  const wishlistValue = wishList.value ? wishList.value : [];
  const wishlistExpandableMaterialsValue = wishListExpandableMaterials.value
    ? wishListExpandableMaterials.value
    : [];

  const { data } = await useFetch('https://telvla.ru/wishlist/list', {
    method: 'POST',
    body: {
      products: wishlistValue,
      expendableMaterials: wishlistExpandableMaterialsValue,
    },
  });

  wishListData.value = data.value.products;
  wishListExpandableMaterialsData.value = data.value.expendable_material;
}

getWishList();
</script>

<template>
  <main>
    <Head>
      <Title>Избранное | Группа компаний ООО «БиоЛайн»</Title>
      <Meta
        name="description"
        content="Группа компаний ООО «БиоЛайн» - один из ведущих поставщиков продукции для лабораторий и учреждений научного и медицинского профиля."
      />
      <Meta
        name="og:image"
        content="/img/og-logo.jpg"
      />
      <Meta
        name="twitter:image"
        content="/img/og-logo.jpg"
      />
      <Meta
        name="og:title"
        content="Избранное | Группа компаний ООО «БиоЛайн»"
      />
      <Meta
        name="og:description"
        content="Группа компаний ООО «БиоЛайн» - один из ведущих поставщиков продукции для лабораторий и учреждений научного и медицинского профиля."
      />
      <Meta
        name="og:site_name"
        content="bioline.vercel.app"
      />
      <Meta
        name="og:url"
        content="https://bioline.vercel.app/wishlist"
      />
      <Meta
        name="og:image:width"
        content="1200"
      />
      <Meta
        name="og:image:height"
        content="630"
      />
      <Meta
        name="og:type"
        content="article"
      />
      <Meta
        name="og:locale"
        content="ru_RU"
      />
      <Meta
        name="twitter:title"
        content="Избранное | Группа компаний ООО «БиоЛайн»"
      />
      <Meta
        name="twitter:description"
        content="Группа компаний ООО «БиоЛайн» - один из ведущих поставщиков продукции для лабораторий и учреждений научного и медицинского профиля."
      />
      <Meta
        name="twitter:site"
        content="bioline.vercel.app"
      />
      <Meta
        name="twitter:card"
        content="summary_large_image"
      />
    </Head>

    <section class="mb-12 xl:mb-16 pt-14">
      <div class="container">
        <Breadcrumb class="mb-12">
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink as-child>
                <NuxtLink to="/">Главная</NuxtLink>
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>Избранное</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
        <h1 class="section-title">Избранное</h1>
      </div>
    </section>

    <ClientOnly>
      <section class="mb-12 xl:mb-16">
        <div class="container grid md:grid-cols-2 xl:grid-cols-4 gap-4">
          <BaseProductCard
            v-for="product in wishListData"
            :key="product.id"
            :product="product"
          />
        </div>
      </section>
    </ClientOnly>

    <ClientOnly
      v-if="
        wishListExpandableMaterialsData &&
        wishListExpandableMaterialsData.length
      "
    >
      <section class="mb-12 xl:mb-16">
        <div class="container">
          <Table class="mb-6 w-full">
            <TableHeader>
              <TableRow>
                <TableHead>Артикул / №</TableHead>
                <TableHead>Название</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow
                v-for="product in wishListExpandableMaterialsData"
                :key="product.id"
              >
                <TableCell>{{ product.articule }}</TableCell>
                <TableCell>{{ product.title }}</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
      </section>
    </ClientOnly>
  </main>
</template>
