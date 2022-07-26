import './Home.css'

export function Hero({setPage}) {
    setPage('home')
    return (
        <section class="_hello">
            <div class="hero_text">
                <h4>Hi all. I am</h4>
                <h1>Ismail Mutafchev</h1>
                <h2> Front-end developer</h2>
                <p class="gray__p"></p>
                <p class="gray__p"></p>
                <p class="hero_p_const"><span class="purple">const</span> <span class="green">githubLink</span>
                    <span class="white"> =</span><a href="https://github.com/ismailmutafchev">"https://github.com/ismailmutafchev"</a>
                </p>
            </div>
            <div class="hero-game">
                <div class="game_window">
                    <img src="./images/IMG_1496.PNG" alt="" />
                    <div class="screw" id="screw-tr">x</div>
                    <div class="screw" id="screw-tl">x</div>
                    <div class="screw" id="screw-br">x</div>
                    <div class="screw" id="screw-bl">x</div>
                    <div id="light_hold" class="arrow"></div>
                    <div class="game_zone">
                        <button class="start_game">start-game</button>
                    </div>
                    <div class="game_controls">
                        <p class="white_game_p"></p>
                        <p class="white_game_p"></p>
                        <div id="arrow_up" class="arrow"><i class="fa-solid fa-caret-up"></i></div>
                        <div id="arrow_down" class="arrow"><i class="fa-solid fa-caret-down"></i></div>
                        <div id="arrow_left" class="arrow"><i class="fa-solid fa-caret-left"></i></div>
                        <div id="arrow_right" class="arrow"><i class="fa-solid fa-caret-right"></i></div>
                    </div>
                    <p class="white_game_p"></p>
                    <div class="food_left"></div>
                </div>
            </div>
        </section>
    )
}