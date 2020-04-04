import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'DeepRock H2O';

  products = [
    {
      img:
        'https://danone-evian-com-prod.s3-eu-west-1.amazonaws.com/new_bottle/range_prestige_us/prest500ml.png',
      description: 'Boston 500',
      size: '500mL',
    },
    {
      img:
        'https://danone-evian-com-prod.s3-eu-west-1.amazonaws.com/new_bottle/prestige_sport_75cl.png',
      description: 'Boston 600',
      size: '600mL',
    },
    {
      img:
        'https://danone-evian-com-prod.s3-eu-west-1.amazonaws.com/new_bottle/range_prestige_us/bottle_1_5l.png',
      description: 'Sports Cap',
      size: '1.5 L',
    },
  ];

  about = [
    {
      img: 'water-bottle.svg',
      title: 'Water Bottle',
      subtitle: 'Lorem Subtitle',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ut voluptatum eius sapiente, totam reiciendis temporibus qui quibusdam, recusandae sit vero unde, sed, incidunt et ea quo dolore laudantium consectetur!',
    },
    {
      img: 'water-drop.svg',
      title: 'Water Drop',
      subtitle: 'Lorem Subtitle',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ut voluptatum eius sapiente, totam reiciendis temporibus qui quibusdam, recusandae sit vero unde, sed, incidunt et ea quo dolore laudantium consectetur!',
    },
    {
      img: 'rock.svg',
      title: 'Water Mineration',
      subtitle: 'Lorem Subtitle',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ut voluptatum eius sapiente, totam reiciendis temporibus qui quibusdam, recusandae sit vero unde, sed, incidunt et ea quo dolore laudantium consectetur!',
    },
    {
      img: 'soil.svg',
      title: 'Soil',
      subtitle: 'Lorem Subtitle',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ut voluptatum eius sapiente, totam reiciendis temporibus qui quibusdam, recusandae sit vero unde, sed, incidunt et ea quo dolore laudantium consectetur!',
    },
  ];

  socialIcons = [
    {
      name: 'mail',
      url:
        'mailto:sales@deeprockh2o.com?Subject=DeepRock%20H2O%20-%20Website%20Contact',
    },
    {
      name: 'facebook',
      url: '#!',
    },
    {
      name: 'twitter',
      url: '#!',
    },
    {
      name: 'instagram',
      url: '#!',
    },
    {
      name: 'linkedin',
      url: '#!',
    },
  ];
}
