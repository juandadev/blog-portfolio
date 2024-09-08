---
title: Mejora tus conocimientos de POO con Nintendo Switch 🎮👾
description: Mi intento por enseñar Programación Orientada a Objetos con un enfoque al Nintendo Switch, fácil de entender para que puedas aumentar tu conocimiento en el desarrollo de software 💪🏻.
tags: [ Computer Science, Programación ]
cover_image: /images/oop-n-switch.png
date: 17 Oct, 2023
author: Juan Daniel Martínez
---

> **Nota:** Este artículo es una traducción al español del post
>
original [Level Up Your Object-Oriented Programming Knowledge with Nintendo Switch 🎮👾](https://dev.to/juandadev/level-up-your-oop-knowledge-with-nintendo-switch-78n),
> con
> ayuda
> de ChatGPT.

# Explorando la Programación Orientada a Objetos con la Nintendo Switch

Imagina por un momento que la Programación Orientada a Objetos (OOP) es como el funcionamiento interno de tu consola de
juegos favorita, la Nintendo Switch. Así como la Switch combina diferentes componentes para dar vida a tus juegos
favoritos, la OOP une datos y funciones para crear código eficiente y organizado. En este artículo, nos embarcaremos en
un viaje para explorar los cuatro principios fundamentales de la OOP a través de la perspectiva de la Nintendo Switch, y
trataré de enseñarte este poderoso paradigma de programación con ejemplos tan entretenidos como un juego de la gran N.
Prepárate para elevar tus habilidades de codificación y jugar mientras desbloqueamos los secretos de la OOP con la
Nintendo Switch como nuestra guía.

La OOP se basa en dos conceptos principales: Clases y Objetos. Estos conceptos se pueden aplicar en el código para
permitirnos construir aplicaciones. La Programación Orientada a Objetos fue creada para guiar la creación de un mejor
software, logrando un mantenimiento y reutilización más fáciles.

> **DESCARGO DE RESPONSABILIDAD:** Los siguientes ejemplos son solo un intento de explicar mi punto, puede haber
> inconsistencias según la realidad.

## CLASES Y OBJETOS

Supongamos que queremos crear una consola completamente nueva, ¿de acuerdo? :) Viene en muchos colores, tiene la
capacidad de jugar videojuegos en cualquier lugar, tiene una duración de batería de 6 horas que se agota cada vez que
juegas un juego, y puedes instalar muchos juegos en su almacenamiento interno. Decidimos llamarla ✨Nintendo Switch✨

![Nintendo Switch](https://res.cloudinary.com/practicaldev/image/fetch/s--VQhY82CN--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_800/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/afff8ufbctv5yzv10ft5.png)

Si traducimos esto en código, podemos crear una Clase llamada `NintendoSwitch` y listar los atributos principales y sus
métodos. Piensa en una clase como una plantilla o esquema que especificará cómo se ve la consola y cómo va a realizar
algunas acciones.

```ts
class NintendoSwitch {
  private color: string;
  private screenSize: number = 5.5;
  private storageCapacity: number = 8;
  private batteryLife: number = 6;
  private gamesInstalled: string[];

  constructor(color: string, gamesInstalled: string[]) {
    this.color = color;
    this.gamesInstalled = gamesInstalled;
  }

  playGame(game: string): void {/* code logic */
  }

  installGame(game: string): void {/* code logic */
  }

  checkBatteryLife(): void {/* code logic */
  }
}
```

Aquí tenemos los atributos principales como color, tamaño de pantalla, capacidad de almacenamiento, duración de la
batería y juegos instalados. Luego tenemos el constructor, una función que sirve para inicializar los valores de los
atributos cuando creamos una instancia de la clase `NintendoSwitch`.

Nota que nuestra clase ya tiene `storageCapacity`, `batteryLife` y `screenSize` inicializados, porque será lo mismo para
todas las nuevas instancias, en lugar de `color` y `gamesInstalled`, que se pueden establecer en el momento en que
creamos la instancia de la clase actual.

> Una **Instancia** es igual a un **Objeto**; podemos crear tantos objetos como queramos a partir de una Clase. En la
> mayoría de los lenguajes usamos la palabra clave `new` para crear un nuevo objeto. Cada objeto puede ser diferente de
> otro, porque podemos tener muchos objetos `NintendoSwitch` con diferentes colores y juegos instalados.

![Instancias del Nintendo Switch](https://res.cloudinary.com/practicaldev/image/fetch/s--Jekb2g4Q--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_800/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/1c017zp0zgr84nkhuxog.png)

En este caso, ninguna de nuestras instancias tiene juegos para jugar :( pero la buena noticia es que ahora puedes
entender qué son las Clases y los Objetos, ¡así que sigamos adelante!

Para alcanzar la maestría, necesitamos entender los ✨cuatro principios de la Programación Orientada a Objetos✨
comenzando con el primero:

### 📦 ENCAPSULACIÓN

Es la necesidad de separar tu código en piezas independientes para un solo propósito. Piensa en ello como una caja 📦 que
contiene datos (propiedades, atributos) y las cosas que se pueden hacer con esos datos (métodos, funciones). De esta
manera, puedes asegurar que tus datos estén seguros y se utilicen correctamente.

Este principio puede definir la razón para tener clases; encapsulamos un conjunto de atributos y las cosas que podemos
realizar con esos atributos como métodos, con el propósito de ocultar el proceso interno y solo mostrar lo que importa
al público. Depende de nosotros si queremos establecer algunos atributos o métodos como públicos, o mantenerlos privados
solo para uso interno.

Si quieres explicar esto de una manera más técnica:

> La encapsulación es una forma de restringir el acceso directo a algunos componentes de un objeto, para que los
> usuarios
> no puedan acceder a los valores de estado de todas las variables de un objeto particular. La encapsulación se puede
> usar
> para ocultar tanto los miembros de datos como las funciones o métodos de datos asociados con una clase u objeto
> instanciado.

### HERENCIA

Es la idea de que puedes heredar ventajas y habilidades de tus padres 👨‍👩‍👦, como el color de ojos o tipo de cabello.

Volvamos a la Nintendo Switch. Ahora queremos crear una nueva consola tomando todo lo que hay dentro de la Nintendo
Switch pero con características adicionales. En términos de código, tal vez algún desarrollador novato pensaría en
copiar y pegar la clase `NintendoSwitch` y crear una nueva para agregar las nuevas características deseadas... ¿fácil,
verdad? Pero, ¿qué pasa si te digo que en lugar de reescribir el código desde cero, podemos crear nuestro nuevo modelo a
partir de lo que ya tenemos 😱 ¡Sí! ¡Así es! Podemos extender la clase `NintendoSwitch` y luego crear la clase
`NintendoSwitchPro` sin copiar todo el código desde cero. Tendremos todas las características de la Nintendo Switch
original y solo agregaremos el nuevo código para las características adicionales, ¡como controles desmontables y la
capacidad de conectar la Nintendo Switch a un dock para jugar en un televisor!

Así que procedemos a crear nuestra nueva clase para la Nintendo Switch Pro, extendiendo la clase `NintendoSwitch`, así:

```ts
class NintendoSwitchPro extends NintendoSwitch {
  constructor(props) {
    super()
    this.super(props);
  }

  detachJoycons() {
    /**/
  }

  connectToTV() {
    /**/
  }
}
```

![Nintendo Switch PRO](https://res.cloudinary.com/practicaldev/image/fetch/s--mbc8oH8X--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_800/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/vo04f6sw9cwa4jyj1laa.png)

Podemos ver que su composición es similar, pero ahora podemos desmontar los controles (detachJoycons) para jugar con
ellos de forma inalámbrica, y también podemos conectarlo al televisor (connectToTV).

Tal vez este es un ejemplo vago, pero en el panorama general esto es ✨herencia✨; tomamos la clase `NintendoSwitch` y la
extendemos en una nueva clase `NintendoSwitchPro` que hereda todos los atributos y métodos de la Nintendo Switch, y
adicionalmente tenemos dos métodos más que pueden hacer cosas nuevas.

Este enfoque organiza las cosas y te ahorra hacer lo mismo una y otra vez.

### POLIMORFISMO

El polimorfismo significa muchas formas. En la OOP podemos modificar las propiedades y métodos que heredamos para tener
un comportamiento diferente de manera que tenga sentido para cada clase. Esto hace que nuestro código sea flexible y
fácil de adaptar a muchos casos de uso.

Volviendo a nuestro ejemplo anterior, nuestra primera clase, `NintendoSwitch`, como sabemos, tiene una pantalla pequeña
de 5.5 pulgadas, su tamaño hace que incluso quepa en tu bolsillo y la batería dura 6 horas de juego continuo. Pero
cuando creamos la Nintendo Switch Pro, decidimos que este nuevo modelo tendría una pantalla de 7 pulgadas, ¡más grande
que la de su predecesora! Y así, tenemos un tamaño mayor de toda la consola que apenas cabe en tu bolsillo de jeans.
Aumentamos la duración de la batería hasta 10 horas de juego continuo, y el resto permanece igual. Así que nuestra nueva
clase será así:

```ts
class NintendoSwitchPro extends NintendoSwitch {
  private screenSize: number = 7;
  private batteryLife: number = 10;

  constructor(props) {
    super()
    this.super(props);
  }

  detachJoycons() {
    /**/
  }

  connectToTV(game: string) {
    /**/
  }
}
```

> `super()` es otra palabra clave que la mayoría de los lenguajes adoptan para referirse a la superclase o clase padre.
> En
> el caso anterior, estamos usando el mismo constructor exacto de la clase padre porque no necesitamos agregar nada
> nuevo
> a él.

![Diagrama de herencia entre clase padre y clase hijo](https://res.cloudinary.com/practicaldev/image/fetch/s--BvvJlJsI--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_800/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/suhdn87cu66pejknazes.png)

Como puedes ver, establecemos un par de atributos que tienen el mismo nombre que algunos de los modelos padres, pero
modificamos sus valores para ajustarlos a la nueva necesidad. Esto se llama **sobreescritura** y es una práctica válida,
¡incluso con métodos! Es como tomar las habilidades heredadas y potenciarlas con superpoderes 💪🏻

### ABSTRACCIÓN

La abstracción significa simplificar las cosas complejas dividiéndolas en partes más pequeñas y manejables. Piensa en
ello como conducir un coche 🚗; no necesitamos conocer todos los detalles técnicos de cómo funciona el motor, solo
necesitamos entender cómo funcionan los controles básicos como el volante, el pedal del gas y los frenos. Dicho de otra
manera, nuestros métodos contenidos en la clase `NintendoSwitch` pueden decirnos QUÉ hace, sin preocuparnos mucho por
CÓMO lo hace.

Por ejemplo, el método `checkBatteryLife()` puede decirnos lo que hace solo con su nombre. Pero internamente funciona
así:

```ts
// NintendoSwitch class file
checkBatteryLife()
:
void {
  console.log(`This Nintendo Switch has ${this.batteryLife} hours of battery life remaining.`);
}

//Our main script
const myFirstSwitch = new NintendoSwitch('Blue', []);

myFirstSwitch.checkBatteryLife(); // Console output: This Nintendo Switch has 6 hours of battery life remaining.
```

Como puedes ver, el atributo `batteryLife` por sí solo no dice mucho, es solo 6, pero ¿6 qué? Entonces
`checkBatteryLife()` nos da más contexto, y el resultado es que el mensaje registrado en la consola especifica que el
atributo de duración de la batería está destinado a ser las horas restantes de duración de la batería.

> A veces podemos encontrar funciones de obtención y establecimiento dentro de las clases. No nos centraremos en estos
> temas por ahora, pero piénsalo como funciones que ayudan a establecer/modificar el valor de un atributo de un objeto (
> métodos de establecimiento) y funciones para leer esos valores (métodos de obtención). A primera vista, esto puede
> parecer inútil, pero a veces puede mantener nuestros atributos más seguros, como agregando una capa de validación para
> que nadie pueda establecer un valor nulo que pueda romper nuestra aplicación, o establecer esa capa de abstracción
> como
> en el ejemplo anterior para darle un significado a los valores de nuestros atributos.

En OOP podemos ocultar piezas complicadas de código y proporcionar una interfaz simple, para que podamos centrarnos en
lo que hace nuestro código en lugar de cómo lo hace, lo que hace que nuestro código sea más fácil de entender y
mantener.

------------------------------------------------------------------------------------------

Y eso es todo, amigos.

Espero que puedas entender mejor los principios de la OOP con estos ejemplos :) Este es un tema importante en el
desarrollo de software y puede incluso darte la oportunidad de conseguir
un trabajo en una gran empresa tecnológica. A menudo buscan desarrolladores con este tipo de conocimiento general en
lugar de