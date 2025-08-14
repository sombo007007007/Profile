<template>
  <main class="bg-gradient-to-r p-4 from-blue-100 to-purple-200">
    <div class="container mx-auto px-4 grid gap-6 p-3">
      <!-- Title -->
      <h1 class="text-blue-500 text-2xl md:text-4xl font-bold text-center">
        My Skilled
        <hr class="w-24 h-1 bg-blue-500 border-0 rounded mx-auto mt-2" />
      </h1>

      <!-- Skills Grid -->
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <!-- Card 1 -->
        <div
          class="bg-amber-50 transition-transform duration-300 ease-in-out shadow-lg p-6 rounded-xl cursor-pointer hover:scale-105"
        >
          <div class="flex flex-col items-center text-center">
            <img src="/src/assets/front-end.png" alt="Front End" class="h-24 w-24 object-contain mb-4" />
            <h2 class="text-lg md:text-xl font-bold mb-2">FRONT END DEVELOPER</h2>
            <p class="text-sm md:text-base">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat in, recusandae tempore accusamus
              aliquid dolores enim.
            </p>
          </div>
        </div>

        <!-- Card 2 -->
        <div
          class="bg-amber-50 transition-transform duration-300 ease-in-out shadow-lg p-6 rounded-xl cursor-pointer hover:scale-105"
        >
          <div class="flex flex-col items-center text-center">
            <img src="/src/assets/programming.png" alt="Back End" class="h-24 w-24 object-contain mb-4" />
            <h2 class="text-lg md:text-xl font-bold mb-2">BACK END DEVELOPER</h2>
            <p class="text-sm md:text-base">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat in, recusandae tempore accusamus
              aliquid dolores enim.
            </p>
          </div>
        </div>

        <!-- Card 3 -->
        <div
          class="bg-amber-50 transition-transform duration-300 ease-in-out shadow-lg p-6 rounded-xl cursor-pointer hover:scale-105"
        >
          <div class="flex flex-col items-center text-center">
            <img src="/src/assets/database.png" alt="Database" class="h-24 w-24 object-contain mb-4" />
            <h2 class="text-lg md:text-xl font-bold mb-2">DATABASES</h2>
            <p class="text-sm md:text-base">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat in, recusandae tempore accusamus
              aliquid dolores enim.
            </p>
          </div>
        </div>

        <!-- Card 4 -->
        <div
          class="bg-amber-50 transition-transform duration-300 ease-in-out shadow-lg p-6 rounded-xl cursor-pointer hover:scale-105"
        >
          <div class="flex flex-col items-center text-center">
            <img src="/src/assets/os.png" alt="Operating System" class="h-24 w-24 object-contain mb-4" />
            <h2 class="text-lg md:text-xl font-bold mb-2">OPERATING SYSTEM</h2>
            <p class="text-sm md:text-base">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat in, recusandae tempore accusamus
              aliquid dolores enim.
            </p>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<style scoped>
/* Optional custom styles */
</style>
