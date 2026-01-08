'use client'

import { motion } from 'framer-motion'
import { useForm } from 'react-hook-form'
import { Send, CheckCircle2 } from 'lucide-react'
import { useState } from 'react'
import { useLanguage } from '@/context/LanguageContext'

interface FormData {
  fullName: string
  phone: string
  email: string
  isBusiness: boolean
}

export default function ContactFormSection({ id = 'contact' }: { id?: string }) {
  const [isSubmitted, setIsSubmitted] = useState(false)
  const { t } = useLanguage()

  const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbxu3jTcdnfrU0vEJxrjQGYt87PgB_CSRKBeMrfa8aQP0yEue28oUz_MV-dSXCu7jC6q/exec'

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<FormData>({
    mode: 'onBlur',
  })

  const onSubmit = async (data: FormData) => {
    try {
      const formPayload = new FormData()
      formPayload.append('Name', data.fullName)
      formPayload.append('Phone', data.phone)
      formPayload.append('Email', data.email)
      formPayload.append('AutoBusiness', data.isBusiness ? 'Так' : 'Ні')

      await fetch(GOOGLE_SCRIPT_URL, {
        method: 'POST',
        body: formPayload,
        mode: 'no-cors'
      })

      console.log('Дані успішно відправлені в Google Таблицю')
      setIsSubmitted(true)
      reset()
      setTimeout(() => setIsSubmitted(false), 5000)

    } catch (error) {
      console.error('Помилка при відправці:', error)
      alert('Щось пішло не так. Будь ласка, спробуйте ще раз.')
    }
  }

  const phoneRegex = /^[+]?[(]?[0-9]{1,4}[)]?[-\s.]?[(]?[0-9]{1,4}[)]?[-\s.]?[0-9]{1,9}$/
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

  return (
      <section
          id={id}
          className="relative py-20 sm:py-24 lg:py-32 overflow-hidden"
      >
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
            backgroundSize: '40px 40px',
          }} />
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="max-w-2xl mx-auto"
          >
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-white to-primary-orange/80 bg-clip-text text-transparent">
                {t.form.title}
              </span>
              </h2>
              <p className="text-lg text-white/70">
                {t.form.subtitle}
              </p>
            </div>

            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="glass-strong rounded-2xl p-8 sm:p-10 shadow-2xl"
            >
              {isSubmitted ? (
                  <motion.div
                      initial={{ scale: 0.8, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      className="text-center py-8"
                  >
                    <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 0.2, type: 'spring' }}
                    >
                      <CheckCircle2 className="h-16 w-16 text-accent-neonGreen mx-auto mb-4" />
                    </motion.div>
                    <h3 className="text-2xl font-bold text-white mb-2">
                      {t.form.successTitle}
                    </h3>
                    <p className="text-white/70">
                      {t.form.successDesc}
                    </p>
                  </motion.div>
              ) : (
                  <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                    <div>
                      <label htmlFor={`fullName-${id}`} className="block text-sm font-medium text-white/90 mb-2">
                        {t.form.nameLabel} *
                      </label>
                      <input
                          id={`fullName-${id}`}
                          type="text"
                          {...register('fullName', {
                            required: t.form.error,
                            minLength: { value: 2, message: 'Мінімум 2 символи' },
                          })}
                          className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-primary-orange focus:border-transparent transition-all"
                          placeholder={t.form.namePlaceholder}
                      />
                      {errors.fullName && (
                          <motion.p initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} className="mt-1 text-sm text-primary-orange">
                            {errors.fullName.message}
                          </motion.p>
                      )}
                    </div>

                    <div>
                      <label htmlFor={`phone-${id}`} className="block text-sm font-medium text-white/90 mb-2">
                        {t.form.phoneLabel} *
                      </label>
                      <input
                          id={`phone-${id}`}
                          type="tel"
                          {...register('phone', {
                            required: t.form.error,
                            pattern: { value: phoneRegex, message: 'Введіть коректний номер телефону' },
                          })}
                          className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-primary-orange focus:border-transparent transition-all"
                          placeholder="+38 (0XX) XXX-XX-XX"
                      />
                      {errors.phone && (
                          <motion.p initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} className="mt-1 text-sm text-primary-orange">
                            {errors.phone.message}
                          </motion.p>
                      )}
                    </div>

                    <div>
                      <label htmlFor={`email-${id}`} className="block text-sm font-medium text-white/90 mb-2">
                        {t.form.emailLabel} *
                      </label>
                      <input
                          id={`email-${id}`}
                          type="email"
                          {...register('email', {
                            required: t.form.error,
                            pattern: { value: emailRegex, message: 'Введіть коректний email' },
                          })}
                          className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-primary-orange focus:border-transparent transition-all"
                          placeholder="example@email.com"
                      />
                      {errors.email && (
                          <motion.p initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} className="mt-1 text-sm text-primary-orange">
                            {errors.email.message}
                          </motion.p>
                      )}
                    </div>

                    <div className="flex items-start">
                      <input
                          id={`isBusiness-${id}`}
                          type="checkbox"
                          {...register('isBusiness')}
                          className="mt-1 h-5 w-5 rounded border-white/20 bg-white/5 text-primary-orange focus:ring-2 focus:ring-primary-orange focus:ring-offset-0 cursor-pointer"
                      />
                      <label htmlFor={`isBusiness-${id}`} className="ml-3 text-sm text-white/80 cursor-pointer">
                        {t.form.businessLabel}
                      </label>
                    </div>

                    <motion.button
                        type="submit"
                        disabled={isSubmitting}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="w-full px-8 py-4 bg-primary-orange text-white rounded-lg font-semibold text-lg hover:bg-primary-orange/90 transition-all duration-200 shadow-xl shadow-primary-orange/40 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? (
                          <>
                            <div className="h-5 w-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                            {t.form.submitting}
                          </>
                      ) : (
                          <>
                            {t.form.submit}
                            <Send className="h-5 w-5" />
                          </>
                      )}
                    </motion.button>
                  </form>
              )}
            </motion.div>
          </motion.div>
        </div>
      </section>
  )
}