import {Component, OnInit, signal} from '@angular/core';
import {TelegramService} from "../../services/telegram.service";

@Component({
  selector: 'app-feedback',
  standalone: true,
  imports: [],
  template: `
    <form class="centered form" [style]="{justifyContent: 'center', height: '70vh'}">
      <h2 class="mb">Обратная связь</h2>
      <textarea
        [value]="feedback()"
        (input)="handleInput($event)"
        class="form-control"
      ></textarea>
    </form>
  `
})
export class FeedbackComponent implements OnInit{
  feedback = signal('')

  constructor(private telegram: TelegramService) {
    this.sendData = this.sendData.bind(this)
  }

  ngOnInit(): void {
    this.telegram.MainButton.setText('Отправить сообщение')
    this.telegram.MainButton.hide()
    this.telegram.MainButton.onClick(this.sendData)
  }

  handleInput(event) {
    this.feedback.set(event.target.value)
    if (this.feedback().trim()) {
      this.telegram.MainButton.show()
    } else {
      this.telegram.MainButton.hide()
    }
  }

  sendData() {
    this.telegram.sendData({ feedback: this.feedback() });
  }

}
