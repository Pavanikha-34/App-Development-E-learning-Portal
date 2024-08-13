package com.example.backend.service;



import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.backend.model.Payment;
import com.example.backend.repository.PaymentRepository;

import java.util.List;
import java.util.Optional;

@Service
public class PaymentService {

    @Autowired
    private PaymentRepository paymentRepository;

    public Payment  savePayment(Payment  paymentModel) {
        return paymentRepository.save(paymentModel);
    }

    public List<Payment> getAllPayments() {
        return paymentRepository.findAll();
    }

    public Payment getPaymentById(Long id) {
        return paymentRepository.findById(id).orElse(null);
    }
    public Payment updatePayment(Long id, Payment paymentModel) {
        Optional<Payment> existingPaymentOpt = paymentRepository.findById(id);
        if (existingPaymentOpt.isPresent()) {
            Payment existingPayment = existingPaymentOpt.get();
            existingPayment.setCardholderName(paymentModel.getCardholderName());
            existingPayment.setEmail(paymentModel.getEmail());
            
            existingPayment.setPhoneNumber(paymentModel.getPhoneNumber());
            return paymentRepository.save(existingPayment);
        } else {
            return null;
        }
    }

    public void deletePayment(Long id) {
        paymentRepository.deleteById(id);
    }
}