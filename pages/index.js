import { Box, Button, Text, TextField, Image } from '@skynexui/components'
import React from 'react';
import appConfig from '../config.json';

function GlobalStyle() {
    return (
        <style global jsx>{`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
          list-style: none;
        }
        body {
          font-family: 'Open Sans', sans-serif;
        }
        /* App fit Height */ 
        html, body, #__next {
          min-height: 100vh;
          display: flex;
          flex: 1;
        }
        #__next {
          flex: 1;
        }
        #__next > * {
          flex: 1;
        }
        /* ./App fit Height */ 
      `}</style>
    );
}
function Title(props) {
    const Tag = props.tag || 'h1';
    return (
        <>
            <Tag>{props.children}</Tag>
            <style jsx>{`
              ${Tag} {
                  color: ${appConfig.theme.colors.neutrals['000']};
                  font-size: 24px;
                  font-weight: 600;
              }
              `}</style>
        </>
    );
}

// //Componente React
// function HomePage() {
//     //JSX
//     return(

//     <div>
//         {/* <GlobalStyle/> */}
//         <Title>Boas vindas de volta!</Title>
//         <h2>Non-Sense Chat - NSC</h2>
//         <style jsx>{`
//         h1 {
//           color: #b2d42;
//         }
//         h2 {
//           color: #4e2c70;
//         }
//       `}</style>
//     </div>

//     )
//   }

//   export default HomePage
  
export default function PaginaInicial() {
    // const username = 'snowlzz';
    const [username, setUsername] = React.useState('snowlzz');
    

    return (
        <>
            <GlobalStyle />
            <Box
                styleSheet={{
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    backgroundColor: appConfig.theme.colors.primary[500],
                    backgroundImage: 'url(https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/3b4bbfd1-f084-41a9-930f-1de2b8fbdb5d/ddvwtyb-ff2e7a34-7f97-47e5-83ab-77004c243056.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzNiNGJiZmQxLWYwODQtNDFhOS05MzBmLTFkZTJiOGZiZGI1ZFwvZGR2d3R5Yi1mZjJlN2EzNC03Zjk3LTQ3ZTUtODNhYi03NzAwNGMyNDMwNTYucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.sbwlkdcUSFHzsXYYOUhQVX424LNlWmuA2mBnB3Yu-lQ)',
                    backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: 'center', //backgroundBlendMode: 'multiply', 
                }}
            >
                <Box
                    styleSheet={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        flexDirection: {
                            xs: 'column',
                            sm: 'row',
                        },
                        width: '100%', maxWidth: '700px',
                        borderRadius: '15px', padding: '32px', margin: '16px',
                        boxShadow: '0 2px 10px 0 rgb(0 0 0 / 10 0%)',
                        backgroundColor: 'rgba(43,45,66, 0.75)',
                    }}
                >
                    {/* Formulário */}
                    <Box
                        as="form"
                        styleSheet={{
                            display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
                            width: { xs: '100%', sm: '50%' }, textAlign: 'center', marginBottom: '32px',
                        }}
                    >
                        <Title tag="h2">Boas vindas de volta!</Title>
                        <Text variant="body3" styleSheet={{ marginBottom: '32px', color: appConfig.theme.colors.neutrals[700] }}>
                            {appConfig.name}
                        </Text>
                        
                        {/* <input
                            type="text"
                            value={username}
                            onChange={function (event) {
                                console.log('usuario digitou', event.target.value);
                                //Onde ta o val?
                                const valor = event.target.value                                
                                //Trocar o valor da var
                                setUsername(valor);
                            }}
                        /> */}

                        <TextField
                            value={username}
                            onChange={function (event) {
                                console.log('usuario digitou', event.target.value);
                                //Onde ta o val?
                                const valor = event.target.value                                
                                //Trocar o valor da var
                                setUsername(valor);
                            }}
                            fullWidth
                            textFieldColors={{
                                neutral: {
                                    textColor: appConfig.theme.colors.neutrals[200],
                                    mainColor: appConfig.theme.colors.neutrals[900],
                                    mainColorHighlight: appConfig.theme.colors.primary[500],
                                    backgroundColor: appConfig.theme.colors.neutrals[999],
                                },
                            }}
                        />
                        <Button
                            type='submit'
                            label='Entrar'
                            fullWidth
                            buttonColors={{
                                contrastColor: appConfig.theme.colors.neutrals["000"],
                                mainColor: appConfig.theme.colors.primary[500],
                                mainColorLight: appConfig.theme.colors.primary[400],
                                mainColorStrong: appConfig.theme.colors.primary[600],
                            }}
                        />
                    </Box>
                    {/* Formulário */}


                    {/* Photo Area */}
                    <Box
                        styleSheet={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            maxWidth: '200px',
                            padding: '16px',
                            backgroundColor: 'rgba(92, 99, 120, 0.5)',
                            border: '1px dashed',
                            borderColor: appConfig.theme.colors.neutrals[300],
                            borderRadius: '20px',
                            flex: 1,
                            minHeight: '240px',
                        }}
                    >
                        <Image
                            styleSheet={{
                                borderRadius: '50%',
                                marginBottom: '16px',
                            }}
                            src={`https://github.com/${username}.png`}
                        />
                        <Text
                            variant="body4"
                            styleSheet={{
                                color: appConfig.theme.colors.neutrals[500],
                                backgroundColor: appConfig.theme.colors.primary['050'],
                                padding: '3px 10px',
                                borderRadius: '1000px'
                            }}
                        >
                            {username}
                        </Text>
                    </Box>
                    {/* Photo Area */}
                </Box>
            </Box>
        </>
    );
}