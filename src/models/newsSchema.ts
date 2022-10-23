import mongoose from 'mongoose'

export const NewsSchema = new mongoose.Schema({
  titulo: { type: String },
  chapeu: { type: String },
  texto: { type: String },
  autor: { type: String },
  imagem: { type: String },
  dataPublicacao: { type: Date },
  tags: { type: String },
  links: { type: String },
  ativo: { type: Boolean },
})
