import React from 'react';
import Header from "../../components/Header";
import RecentViews from "./components/RecentViews";
import Section from "./components/Section";
import Slider from './components/Slider'

export default function HomePage() {
    return (
        <>
            <Header></Header>
            <Slider></Slider>
            <RecentViews></RecentViews>
            <Section></Section>
        </>
    )
}
