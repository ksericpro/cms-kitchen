import React, { useState, useEffect, useCallback} from 'react'
import { client } from '../../client'
import CarouselSlide from "./CarouselSlide";

const Carousel = () => {
    const [isCarouselLoading, setIsCarouselLoading] = useState(false)
    const [carouselSlides, setCarouselSlides] = useState([]) 
    

    const cleanUpCarouselSlides = useCallback((rawData) =>{
        console.log("-cleanUpCarouselSlides-")
        const cleanSlides = rawData.map((slide) =>{

            console.log("slide=", slide)
            const { sys, fields } = slide 
            const id  = sys.id

            console.log("sys=", sys, "fields=", fields)
            const slideTitle = fields.title
            const slideDescription = fields.description
            const slideBg = fields.image.fields.file.url 
            const updatedSlide = {id, slideTitle, slideDescription, slideBg}
            console.log("updatedSlide=", updatedSlide)
            return updatedSlide
        })

        console.log("cleanSlides=", cleanSlides)
        setCarouselSlides(cleanSlides)
    }, [])

    //getting data from contentful
    const getCarouselSlides = useCallback(async () =>{
        setIsCarouselLoading(true)
        try {
            const response = await client.getEntries({ content_type: 'kitchenCarousel'})
            const responseData = response.items
            console.log("responseData=",responseData)
            if (responseData){
                cleanUpCarouselSlides(responseData)
            } else {
                setCarouselSlides([])
            }
            setIsCarouselLoading(false)
        } catch (error) {
            console.log(error)
            setIsCarouselLoading(false)
        }
    }, [cleanUpCarouselSlides])

    // Execute after render
    useEffect(()=>{
        getCarouselSlides()
    }, [getCarouselSlides])

    console.log("carouselSlides=",carouselSlides)

    return (
        <div>
            {carouselSlides.map((item) =>{
                const {id, slideBg, slideTitle, slideDescription} = item;
                return (
                   <CarouselSlide key={id} id={id} slideTitle={slideTitle} slideDescription={slideDescription} slideBg={slideBg}/>
                )
            })}
        </div>
    )
}

export default Carousel