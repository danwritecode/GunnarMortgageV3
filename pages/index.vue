<template>
  <div>
    <Html lang="en-US">
      <Head>
        <!-- Primary Meta Tags -->
        <Title>Gunnar Mortgage</Title>
        <Meta name="title" content="Gunnar Mortgage" />
        <Meta name="description" content="Buying a home and getting a mortgage can be a stressful process. Work with someone who knows what their doing and has the reputation to back it." />

        <!-- Open Graph / Facebook -->
        <Meta property="og:type" content="website" />
        <Meta property="og:url" content="https://gunnarmortgage.com" />
        <Meta property="og:title" content="Gunnar Mortgage" />
        <Meta name="description" content="Buying a home and getting a mortgage can be a stressful process. Work with someone who knows what their doing and has the reputation to back it." />
        <Meta property="og:image" content="https://raw.githubusercontent.com/danwritecode/GunnarMortgageV3/main/assets/img/logos/card.png" />

        <!-- Twitter -->
        <Meta property="twitter:card" content="summary_large_image" />
        <Meta property="twitter:url" content="https://gunnarmortgage.com" />
        <Meta property="twitter:title" content="Gunnar Mortgage" />
        <Meta name="description" content="Buying a home and getting a mortgage can be a stressful process. Work with someone who knows what their doing and has the reputation to back it." />
        <Meta property="twitter:image" content="https://raw.githubusercontent.com/danwritecode/GunnarMortgageV3/main/assets/img/logos/card.png" />
      </Head>
    </Html>
    <IndexHero />
    <!-- <IndexWhoisgunnarv2 /> -->
    <!-- <IndexCustomers /> -->
    <IndexReviews />
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  background: 'none',
  rails: false
})
</script>
