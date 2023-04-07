const parent = React.createElement("div", 
                            {id:"parent"}, 
                            [
                                React.createElement( "div", 
                                    {id:"child", key:"child"},
                                    [
                                        React.createElement("h1",
                                            {id:"h1", key:"h1"},
                                            "I'm H1 tag"
                                        ),
                                        React.createElement("h2",
                                            {id:"h2", key:"h2"},
                                            "I'm H1 tag"
                                        )
                                    ]
                                ),
                                React.createElement( "div", 
                                    {id:"child2", key:"child2"},
                                    [
                                        React.createElement("h1",
                                            {id:"h1-child2", key:"h1-child2"},
                                            "I'm child2 H1 tag"
                                        ),
                                        React.createElement("h2",
                                            {id:"h2-child2", key:"h2-child2"},
                                            "I'm child2 H1 tag"
                                        )
                                    ]
                                ),

                            ]
                    )
const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(parent)
