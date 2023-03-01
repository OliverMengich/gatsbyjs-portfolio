import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import Layout from "../components/layout";

const IndexPage: React.FC<PageProps> = () => {
    return (
        <Layout>
            <main style={{position:'relative'}}>
                <section>
                    <h1>Hola, Me llamo Oliver Kipkemei </h1>
                    <p>
                        I'm a software developer based in Nairobi, Kenya. I'm
                        passionate about building software that solves real
                        problems.
                    </p>
                    <div>
                        <button>Hire Me</button>

                        <button>My Portfolio</button>
                    </div>
                </section>
                <section>
                    <aside>
                        <img src="" alt="me" />
                    </aside>
                    <aside>
                        <h4>My Biography</h4>
                        <h3>Software Developer</h3>
                        <p>
                            I'm a software developer based in Nairobi, Kenya. I'm
                            passionate about building software that solves real
                            problems.
                        </p>
                        <p>
                            Follow me on
                            <div>
                                <a href="https://twitter.com/OllieKem7">
                                    @OllieKem7
                                </a>
                                <a href="https://github.com/OliverMengich">Github</a>
                                <a href="https://www.linkedin.com/in/oliver-arsenal">Linkedin</a>
                            </div>
                            <div>
                                <button>Hire Me</button>
                                <button>My Portfolio</button>
                            </div>
                        </p>
                    </aside>
                </section>
                <footer>
                    @Oliver Kipkemei 2021
                </footer>
            </main>
        </Layout>
    )
}

export default IndexPage

export const Head: HeadFC = () => <title>Oliver Kipkemei</title>
