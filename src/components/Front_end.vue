<template>
  <main class="bg-gradient-to-r p-6 md:p-[5%] from-blue-100 to-purple-200">
    <div class="container mx-auto px-4 grid gap-6 items-center">
      <!-- Heading -->
      <h1 class="text-blue-500 text-2xl md:text-4xl font-bold text-center">
        SERVICES
        <hr class="w-24 h-1 bg-blue-500 border-0 rounded mx-auto mt-2" />
      </h1>

      <!-- Content Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4 items-center">
        <!-- Image Section -->
        <div class="flex justify-center">
          <img
            src="/src/assets/front_enf_developer.svg"
            alt="Front-end Developer"
            class="w-full max-w-sm rounded-lg object-contain transition-transform duration-300 ease-in-out cursor-pointer hover:scale-105"
          />
        </div>

        <!-- Text Section -->
        <div class="flex flex-col justify-center text-center md:text-left">
          <h2 class="text-blue-500 font-bold text-xl md:text-2xl mb-4">
            Front-end Developer
          </h2>
          <p class="mb-3 text-sm md:text-base">
            From HTML to Vue.js and Next.js accept React.js
            Are you looking to captivate your audience with visually stunning and highly
            functional websites? Look no further! As a seasoned frontend developer,
            I specialize in transforming ideas into immersive digital experiences that
            leave lasting impressions. With expertise in utilizing the power of HTML and
            taking advantage of the versatility of Next.js, I bring your visions to life by
            seamlessly blending creativity and cutting-edge technology.
          </p>
        </div>
      </div>
    </div>
  </main>
</template>
