import React from "react";
import "./styles.css";

export const TasksHow = () => {
  const [state, setState] = React.useState(1);
  return (
    <div className="tasks-stepUse-container">
      <div className="tasks-stepUse-block">
        <span className="tasks-stepUse-block-text">
          Как пользоваться развивающим курсом?
        </span>
      </div>
      <div className="tasks-stepUse-blockTwo">
        <div className="tasks-stepUse-blockTwo-container">
          <div
            onClick={() => setState(1)}
            className={
              state === 1
                ? "tasks-stepUse-blockTwo-block-left-act"
                : "tasks-stepUse-blockTwo-block-left"
            }
          >
            <span
              className={
                state === 1
                  ? "tasks-stepUse-blockTwo-block-left-text-act"
                  : "tasks-stepUse-blockTwo-block-left-text"
              }
            >
              Живой процесс
            </span>
          </div>
          <div
            onClick={() => setState(2)}
            className={
              state === 2
                ? "tasks-stepUse-blockTwo-block-left-act"
                : "tasks-stepUse-blockTwo-block-left"
            }
          >
            <span
              className={
                state === 2
                  ? "tasks-stepUse-blockTwo-block-left-text-act"
                  : "tasks-stepUse-blockTwo-block-left-text"
              }
            >
              Важность заданий
            </span>
          </div>
          <div
            onClick={() => setState(3)}
            className={
              state === 3
                ? "tasks-stepUse-blockTwo-block-left-act"
                : "tasks-stepUse-blockTwo-block-left"
            }
          >
            <span
              className={
                state === 3
                  ? "tasks-stepUse-blockTwo-block-left-text-act"
                  : "tasks-stepUse-blockTwo-block-left-text"
              }
            >
              Структура работы
            </span>
          </div>
        </div>
        <div className="tasks-stepUse-blockTwo-container-two">
          {state === 1 && (
            <span className="tasks-stepUse-blockTwo-container-two-text">
              3. Если дело вовсе забылось, когда вспомните о нем, тоже отмечайте
              - что именно отвлекло, что помогло вспомнить о забытом деле.
              <br /> Часто забытое дело вспоминается так поздно, что уже
              невозможно его сделать. Это такая хитрая натренированная жизнью
              уловка, зафиксированная в бессознательном. Она помогает
              воспринимать себя достаточно ответственным – «вспомнил все же». И
              в то же время «помогает» понять, что «уже так поздно, что сделать
              дело невозможно; было бы время, сделал бы; вот какой я все-таки
              хороший!»
              <br /> А факт в том, что плановое дело не сделано.
              <br /> И вот, если удается фиксировать такие случаи, можно заранее
              начать искать способ, как завтра гарантированно не забыть дело и
              приступить к нему.
              <br /> Все, что описываем – реальность. Цитата: «Оставался час до
              Дела, и начал ощущать внутри себя, что Дело это «явно чуждое»,
              «внешнее», «инородное».
              <br /> В итоге, прилег и уснул. Проснулся часа в три ночи. Чувство
              вины некое, но делать уже невозможно. Пришла мысль – ничего,
              сделаю в субботу (это выходной на этой неделе развития)».
            </span>
          )}
          {state === 2 && (
            <span className="tasks-stepUse-blockTwo-container-two-text">
              Что такое Lorem Ipsum? Lorem Ipsum - это текст-"рыба", часто
              используемый в печати и вэб-дизайне. Lorem Ipsum является
              стандартной "рыбой" для текстов на латинице с начала XVI века. В
              то время некий безымянный печатник создал большую коллекцию
              размеров и форм шрифтов, используя Lorem Ipsum для распечатки
              образцов. Lorem Ipsum не только успешно пережил без заметных
              изменений пять веков, но и перешагнул в электронный дизайн. Его
              популяризации в новое время послужили публикация листов Letraset с
              образцами Lorem Ipsum в 60-х годах и, в более недавнее время,
              программы электронной вёрстки типа Aldus PageMaker, в шаблонах
              которых используется Lorem Ipsum
            </span>
          )}
          {state === 3 && (
            <span className="tasks-stepUse-blockTwo-container-two-text">
              Откуда он появился? Многие думают, что Lorem Ipsum - взятый с
              потолка псевдо-латинский набор слов, но это не совсем так. Его
              корни уходят в один фрагмент классической латыни 45 года н.э., то
              есть более двух тысячелетий назад. Ричард МакКлинток, профессор
              латыни из колледжа Hampden-Sydney, штат Вирджиния, взял одно из
              самых странных слов в Lorem Ipsum, "consectetur", и занялся его
              поисками в классической латинской литературе. В результате он
              нашёл неоспоримый первоисточник Lorem Ipsum в разделах 1.10.32 и
              1.10.33 книги "de Finibus Bonorum et Malorum" ("О пределах добра и
              зла"), написанной Цицероном в 45 году н.э. Этот трактат по теории
              этики был очень популярен в эпоху Возрождения. Первая строка Lorem
              Ipsum, "Lorem ipsum dolor sit amet..", происходит от одной из
              строк в разделе 1.10.32 Классический текст Lorem Ipsum,
              используемый с XVI века, приведён ниже. Также даны разделы 1.10.32
              и 1.10.33 "de Finibus Bonorum et Malorum" Цицерона и их английский
              перевод, сделанный H. Rackham, 1914 год.
            </span>
          )}
        </div>
      </div>
    </div>
  );
};
