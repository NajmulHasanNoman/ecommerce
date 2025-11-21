"use client";
import React from 'react';
import Master from '@/components/master/Master';
import SliderSkeleton from '@/skeleton/sliderSkeleton';
import FeaturesSkeleton from '@/skeleton/featuresSkeleton';
import BrandsSkeleton from '@/skeleton/brandsSkeleton';
import ProductsSkeleton from '@/skeleton/productsSkeleton';
import CategoriesSkeleton from '@/skeleton/categoriesSkeleton';
const page = () => {
  return (
    <div>
      <Master>
      <SliderSkeleton/>
      <FeaturesSkeleton/>
      <BrandsSkeleton/>
      <ProductsSkeleton/>
      <CategoriesSkeleton/> 
      </Master>
    </div>
  );
};

export default page;