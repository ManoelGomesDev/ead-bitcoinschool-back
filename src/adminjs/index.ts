

import AdminJs from 'adminjs'
import AdminJsExpress from '@adminjs/express'
import AdminJsSequelize from '@adminjs/sequelize'

import { sequelize } from '../database'
import { adminJsResources } from "./resources";
import { User } from '../models'
import bcrypt from 'bcrypt'

AdminJs.registerAdapter(AdminJsSequelize)

export const adminJs = new AdminJs({
    databases: [sequelize],
    rootPath: '/admin',
    resources: adminJsResources,
    branding: {
        companyName: 'BitcoinSchool',
        logo: '/bitcoinschool.svg',
        theme: {
            colors: {


                primary100: '#f7d01d',
                primary80: '#f9dc3a',
                primary60: '#fbe856',
                primary40: '#fdf373',
                primary20: '#ffff8f',
                grey100: '#151515',
                grey80: '#333333',
                grey60: '#4d4d4d',
                grey40: '#666666',
                grey20: '#dddddd',
                filterBg: '#333333',
                accent: '#151515',
                hoverBg: '#151515',
            }
        }
    }
})



export const adminJsRouter = AdminJsExpress.buildAuthenticatedRouter(adminJs, {
    authenticate: async (email, password) => {
      const user = await User.findOne({ where: { email } })
  
      if (user && user.role === 'admin') {
        const matched = await bcrypt.compare(password, user.password)
  
        if (matched) {
          return user
        }
      }
  
      return false
    },
    cookiePassword: 'senha-do-cookie'
  }, null, {
      resave: false,
      saveUninitialized: false
  })

