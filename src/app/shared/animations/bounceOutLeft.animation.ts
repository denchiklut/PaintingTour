import {
  animate,
  style,
  transition,
  useAnimation,
  animation,
  keyframes,
  trigger
} from "@angular/animations";

export const bounceOutLeftAnimation = animation(
  animate('{{ duration }} {{ easing  }}', keyframes([
    style({
      offset: .2,
      opacity: 1,
      transform: 'translateX(20px)'
    }),
    style({
      offset: 1,
      opacity: 0,
      transform: 'translateX(-100%)'
    })
  ])),
  {
    params: {
      duration: '2s',
      easing: 'ease-out '
    }
  }
);

export const bounceOutLeft = trigger('bounceOutLeft', [
  transition(':leave',
    useAnimation(bounceOutLeftAnimation)
  )
])
