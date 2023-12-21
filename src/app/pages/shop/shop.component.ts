import {Component, inject} from '@angular/core';
import {TelegramService} from "../../services/telegram.service";
import {ProductsService} from "../../services/products.service";
import {ProductListComponent} from "../../components/product-list/product-list.component";

@Component({
  selector: 'app-shop',
  standalone: true,
  imports: [ProductListComponent],
  template: `
    <h1>shop</h1>
    <app-product-list
      title="Отдельный навык"
      subTitle="Изучите востребованные технологии, чтобы расширить свой стек и добавить заветную галочку в резюме"
      class="product-list"
      [products]="products.byGroup['skill']"
    />
    <app-product-list
      title="Интенсивы"
      subTitle="Экспресс-программы, где за короткий период вы получаете максимум пользы"
      class="product-list"
      [products]="products.byGroup['intensive']"
    />
    <app-product-list
      title="Бесплатные курсы"
      subTitle="Необходимые навыки и проекты в портфолио за ваши старания"
      class="product-list"
      [products]="products.byGroup['course']"
    />
  `
})
export class ShopComponent {

  telegram = inject(TelegramService);
  products = inject(ProductsService);

  constructor() {
    this.telegram.BackButton.hide();
  }
}
