<script setup>
import CATEGORIES from '~/data/categories'
import { Card, CardContent } from '~/components/ui/card'
</script>

<template>

  <section class="mb-16 pt-14">
    <div class="container">
      <h1 class="section-title">На складе</h1>
    </div>
  </section>

  <section class="mb-40">
    <div class="container">
      <div class="flex flex-col gap-4">
        <Card
          v-for="(_, index) in 4"
          :key="index"
          class="flex flex-col gap-6 p-4 items-center text-center">
          <CardContent class="flex flex-col xl:flex-row w-full p-0 gap-8">
            <div class="flex basis-full xl:basis-1/3 justify-center">
              <BaseImage
                class="w-full xl:w-[350]"
                src="/img/items/item-1.jpg"
                alt="alt"
                aspect-ratio="aspect-square"
                placeholder="bg-[#fff]"
                width="350"
                height="350"
              />
            </div>

            <div class="basis-2/3 flex flex-col items-start gap-6">
              <h2 class="font-bold text-2xl">Автоматический разливочный модуль в чашки Петри</h2>
              <Separator />
              <p class="text-xl text-gray-500">
                Производитель: Systec GmbH & Co. KG, Германия
              </p>
              <ul class="text-start">
                <li>Вместимость карусели: 440 чашек Петри.</li>
                <li>Сенсорный цветной дисплей.</li>
                <li>Встроенная база данных чашек Петри различных производителей с возможностью её дополнения.</li>
                <li>Диапазон дозирования среды - 1-1000 мл.</li>
                <li>Возможность полуавтоматического розлива питательной среды в любую емкость.</li>
                <li>УФ-лампа в зоне розлива среды.</li>
                <li>Совместимость со средоваркой любого производителя.</li>
              </ul>
            </div>
          </CardContent>
          <CardFooter class="flex flex-col xl:flex-row gap-4 justify-between w-full">
            <div class="flex">
              <Icon
                name="iconoir:star"
                width="24"
                height="24"
                color="#575757" />
            </div>
            <Button variant="outline">
              Отправить запрос
            </Button>
            <span>Перейти на страницу</span>
          </CardFooter>
        </Card>
      </div>
    </div>
  </section>

</template>
