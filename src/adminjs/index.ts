

import AdminJs from 'adminjs'
import AdminJsExpress from '@adminjs/express'
import AdminJsSequelize from '@adminjs/sequelize'

import { sequelize } from '../database'
import { adminJsResources } from "./resources";

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

export const adminJsRouter = AdminJsExpress.buildRouter(adminJs)