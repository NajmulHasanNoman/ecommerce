
import React from 'react';
import Master from '@/components/master/Master';
// import SliderSkeleton from '@/skeleton/sliderSkeleton';
import Slider from '@/components/product/slider';
import Features from '@/components/features/features';
import { Suspense } from 'react';
import FeaturesSkeleton from '@/skeleton/featuresSkeleton';
import BrandsSkeleton from '@/skeleton/brandsSkeleton';
import ProductsSkeleton from '@/skeleton/productsSkeleton';
import CategoriesSkeleton from '@/skeleton/categoriesSkeleton';

const page = () => {
  return (
    <div>
      <Master>
      {/* <SliderSkeleton/> */}
      <Slider/>
    <Suspense fallback={<FeaturesSkeleton/>}>
      <Features/>
    </Suspense>
      
      {/* <FeaturesSkeleton/> */}
      <BrandsSkeleton/>
      <ProductsSkeleton/>
      <CategoriesSkeleton/> 
      </Master>
    </div>
  );
};

export default page;