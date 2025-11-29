"use client";
import React from 'react';
import Master from '@/components/master/Master';
// import SliderSkeleton from '@/skeleton/sliderSkeleton';
import Slider from '@/components/product/slider';

// import FeaturesSkeleton from '@/skeleton/featuresSkeleton';
import BrandsSkeleton from '@/skeleton/brandsSkeleton';
import ProductsSkeleton from '@/skeleton/productsSkeleton';
import CategoriesSkeleton from '@/skeleton/categoriesSkeleton';
import Features from '@/components/features/features';
const page = () => {
  return (
    <div>
      <Master>
      {/* <SliderSkeleton/> */}
      <Slider/>
      <Features/>
      
      {/* <FeaturesSkeleton/> */}
      <BrandsSkeleton/>
      <ProductsSkeleton/>
      <CategoriesSkeleton/> 
      </Master>
    </div>
  );
};

export default page;