class Pomme {

    public name: string
    public color: string

    constructor(
        name: string,
        color: string,
    ) {
      console.log('Initialisation de la pomme')
      this.name = name
      this.color = color
    }

    public eat() {
      console.log('Je mange une pomme')
    }

    public changeColor(newColor: string) {
      this.color = newColor
    }

}

const apple = new Pomme('Golden', 'yellow')
apple.eat()
apple.changeColor('red')
console.log(apple.color)

