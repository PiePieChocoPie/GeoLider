import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"
import "./BannerCarousel.css" 
import type { KeenSliderPlugin } from "keen-slider"
import "keen-slider/keen-slider.min.css"
const banners = [
  { id: 1, image: "/banners/geovation.png", title: "Новое решение в обработке сейсморазведочных данных и построении изображений" },
  { id: 2, image: "/banners/geose.png", title: "Контроль качества полевого материала и первичная обработка 2D и 3D данных сейсморазведки " },
  { id: 3, image: "/banners/geoop.png", title: "Обработка и интерпретация геолого-геофизических исследований в скважинах" },
  { id: 4, image: "/banners/seis.png", title: " Эксклюзивная технология интерпретации сейсмических данных на основе генетики" },
]
const Autoplay: KeenSliderPlugin = (slider) => {
  let timeout: ReturnType<typeof setTimeout>
  let mouseOver = false

  function clearNextTimeout() {
    clearTimeout(timeout)
  }

  function nextTimeout() {
    clearTimeout(timeout)
    if (mouseOver) return
    timeout = setTimeout(() => {
      slider.next()
    }, 3000)
  }

  slider.on("created", () => {
    slider.container.addEventListener("mouseover", () => {
      mouseOver = true
      clearNextTimeout()
    })
    slider.container.addEventListener("mouseout", () => {
      mouseOver = false
      nextTimeout()
    })
    nextTimeout()
  })

  slider.on("dragStarted", clearNextTimeout)
  slider.on("animationEnded", nextTimeout)
  slider.on("updated", nextTimeout)
}
export default function BannerCarousel() {
    const [sliderRef] = useKeenSlider<HTMLDivElement>(
    {
        loop: true,
        slides: {
        perView: 1,
        },
    },
    [Autoplay]
    )

  return (
    <div ref={sliderRef} className="keen-slider">
        {banners.map((banner) => (
        <div className="keen-slider__slide" key={banner.id}>
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
            <img
                src={banner.image}
                alt={banner.title}
                style={{ width: "100%", height: "auto", borderRadius: "10px" }}
            />
            <h2 style={{
                marginTop: "12px",
                fontSize: "1.2rem",
                fontWeight: 600,
                color: "black", 
                textAlign: "center",
            }}>
                {banner.title}
            </h2>
            </div>
        </div>
        ))}
    </div>
  )
}
