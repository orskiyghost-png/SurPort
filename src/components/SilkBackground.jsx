import Silk from './Silk'

export default function SilkBackground(props) {
  return (
    <div className="silk-background" aria-hidden="true">
      <Silk
        color="#af2e44"
        sheenColor="#656565"
        speed={5}
        scale={1}
        rotation={0}
        sheen={0.7}
        depth={0.7}
        glow={0.2}
        noiseIntensity={1}
        mouseInteraction
        clickRipple={false}
        intro
        {...props}
      />
    </div>
  )
}
