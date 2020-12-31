
import React from 'react'
import { createComponent } from 'react-fela'

import Container from 'components/Container'
import styles from './styles'

const Title = createComponent(styles.title, 'h3', ['key'])
const List = createComponent(styles.list, 'ul', ['key'])
const ListItem = createComponent(styles.listItem, 'li', ['key'])

const team = [
        {
            area: 'Coordinación',
            team: [
                'Layla Hirsh Martínez',
                'Alberto Martín Gago Medina',
                'Alfredo Jesús Ibáñez Gabilondo',
                'Iván Anselmo Sipiran Mendoza',
                'Gabriela Salmon Mulanovich',
            ]
        },
        {
            area: 'Equipo de Trabajo',
            team: [
                'Christian Luis Bayes Rodriguez',
                'Víctor Giancarlo Sal y Rosas Celi',
                'Luis Hilmar Valdivieso Serrano',
                'Carlos Nilberto Veliz Capuñay',
                'Freddy Ricardo Hurtado de Mendoza Barra',
                'César Armando Beltrán Castañón',
                'José Luís Bazo Alba',
                'Ramzy Francis Kahhat Abedrabbo',
            ]
        },
        {
            area: 'Ingeniería',
            team: [
                'Ronaldo Romario Tunque Cahui',
                'Jhamir Arturo Lucas Ramos',
                'Luiggi Gianpiere Tenorio Ku',
                'Úrsula Lucía Cervantes Suyo',
                'Emilio Rafael García Ríos',
            ]
        },
        {
            area: 'Infraestructura de cómputo',
            team: [
                'Leopoldo Genghis Rios Kruger'
            ]
        }
]

const Team = () => {
    return (
        <Container>
            <h2> Equipo </h2>
            {
                team.map((item, itemIndex) => {
                    const members = item.team.map((member, memberIndex) => (
                        <ListItem key={`${item.area}-member-${memberIndex}`}>{member}</ListItem>
                    ))

                    return (
                        <div key={`${item.area}-${itemIndex}`}>
                            <Title>
                                {item.area}
                            </Title>
                            <List>
                                {members}
                            </List>
                        </div>
                    )
                })
            }
        </Container>
    )
}

export default Team
