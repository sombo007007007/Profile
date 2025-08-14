<template>
  <!-- Main Profile Section -->
  <main class="min-h-screen bg-gradient-to-r from-blue-100 to-purple-200 flex items-center">
    <div class="container mx-auto px-4 py-10">
      <!-- Responsive layout -->
      <div class="flex flex-col-reverse lg:flex-row items-center gap-10">

        <!-- Text Section -->
        <div class="lg:w-1/2 pl-10">
          <h1 class="text-blue-500 text-3xl lg:text-5xl font-bold">PHOEM SOMBO</h1>

          <div class="mt-3 flex text-lg lg:text-2xl">
            <span class="text-blue-500 font-bold">Full Stack Developer</span>
            <span class="text-red-500 ml-1">Cambodia</span>
          </div>

          <p class="mt-6 text-base leading-relaxed max-w-lg">
            A web Application developer is a skilled professional who specializes in creating and maintaining
            websites. They are proficient in various programming languages such as HTML, CSS, and JavaScript, and
            they utilize their expertise to design and develop visually appealing and user-friendly websites.
          </p>
        </div>

        <!-- Image Section -->
        <div class="lg:w-1/2 flex justify-center lg:justify-start">
          <img src="/src/assets/image/sombo.png" alt="Logo"
            class="w-64 sm:w-80 lg:w-[85%] h-auto object-contain transition-transform duration-300 ease-in-out cursor-pointer hover:scale-105 rounded-xl" />
        </div>

      </div>
    </div>
  </main>
</template>
